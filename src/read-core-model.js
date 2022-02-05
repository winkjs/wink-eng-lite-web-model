//     wink-nlp
//
//     Copyright (C) GRAYPE Systems Private Limited
//
//     This file is part of “wink-nlp language models”.
//
//     Permission is hereby granted, free of charge, to any
//     person obtaining a copy of this software and
//     associated documentation files (the "Software"), to
//     deal in the Software without restriction, including
//     without limitation the rights to use, copy, modify,
//     merge, publish, distribute, sublicense, and/or sell
//     copies of the Software, and to permit persons to
//     whom the Software is furnished to do so, subject to
//     the following conditions =
//
//     The above copyright notice and this permission notice
//     shall be included in all copies or substantial
//     portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF
//     ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
//     TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
//     PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
//     DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
//     CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
//     CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//

/* eslint-disable no-console */
/* eslint-disable no-sync */
/* eslint-disable guard-for-in */

const originalModel = require( './languages/cur/models/eng-core-web-model.json' );

var readModel = function ( ) {
  // Create a deep clone so that multiple instances of winkNLPs can be created
  // without causing any conflict. The orginal model will in any case stay in
  // the Node.js cache as per the "require" definition.
  const model = JSON.parse( JSON.stringify( originalModel ) );
  // Packing information block.
  var packing = model.packing;
  var featuresData = model.features;
  var pos = model.pos;
  var lexiconAsBuffer;
  var xpansionsAsBuffer;


  // With header in hand, can allocate memory to lexicon.
  lexiconAsBuffer = Buffer.from( model.lexicon, 'base64' );
  // Read the lexicon block.
  model.lexicon = new Uint32Array( lexiconAsBuffer.buffer, 0, ( lexiconAsBuffer.length / 4 ) );

  xpansionsAsBuffer = Buffer.from( model.xpansions, 'base64' );
  model.xpansions = new Uint32Array( xpansionsAsBuffer.buffer, 0, ( xpansionsAsBuffer.length / 4 ) );

  // Rebuild hash from list for the required features.
  for ( const f in model.packing.layout ) {
    if ( packing.layout[ f ][ 3 ] === 0 ) {
      featuresData[ f ].hash = Object.create( null );
      for ( let k = 0; k < featuresData[ f ].list.length; k += 1 ) featuresData[ f ].hash[ featuresData[ f ].list[ k ] ] = k;
    }
  }
  // Rebuilding hash from lexeme is mandatory.
  featuresData.lexeme.hash = Object.create( null );
  for ( let k = 0; k < featuresData.lexeme.list.length; k += 1 ) featuresData.lexeme.hash[ featuresData.lexeme.list[ k ] ] = k;


  // Build an array of sets that is indexed by `lexemeCID`; each set contains the
  // possible pos tags for that cluster id.
  const clusters = featuresData.posClusters.list;
  for ( let k = 0; k < clusters.length; k += 1 ) {
    clusters[ k ] = new Set( clusters[ k ].split( '_' ).map( ( e ) => ( pos.hash[ e ] || 0 ) ) );
  }


  return model;
}; // readModel()

module.exports = readModel;
