require('dotenv').config();

const apiId = process.env.ALGOLIA_API_ID
const apiKey = process.env.ALGOLIA_API_KEY

const algoliasearch = require('algoliasearch')

const client = algoliasearch(apiId, apiKey)
const index = client.initIndex('songs')

// console.log('index', index)

const data={
    abc:{
       artistName:'jd',
       trackName:"let's party" 
    },
    cde:{
        artistName:'britney',
        trackName:"oops" 
     } 
}

Object.keys(data).forEach(async objectID =>{
console.log('writing',{
  objectID,
  ...data[objectID]
})
    await index.saveObject({
      objectID,
      ...data[objectID]
    })
        .catch(error =>console.error('algolia error', error))

    console.log('written', objectID)

})
