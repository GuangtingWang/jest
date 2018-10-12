const fetch = require('node-fetch')
const nock = require('nock');

const fetchData = require('../main');


// Async ,use done to trigger the callback
test('the data is peanut butter1', done => {
    function callback(data) {
      expect(data).toEqual({"name":'peanut'});
      done();
    };
  
    fetch('http://localhost:4200/peanut')
        .then(res => res.json())
        .then(res => callback(res))
  });


  // Promise
  test('the data is peanut butter2', () => {
    return fetch('http://localhost:4200/peanut')
        .then(res => res.json()).
        then(res => expect(res).toEqual({"name":"peanut"}));
  });



// Await and Async

it('should properly get peanut', async () => {
    nock('http://localhost:4200')
        .get('/peanut')
        .reply(200, {name: "another peanut"});

    const data = await fetchData();
    expect(data).toEqual("another peanut");
})

it('should return null, 404', async () => {
    nock('http://localhost:4200')
      .get('/peanut')
      .reply(404);
    
    const data = await fetchData();
    expect(data).toBe(null);
});

it('403 error', async () => {
    nock('http://localhost:4200')
        .get('/peanut')
        .reply(403);
// if error, no await here
    const data = fetchData();
    expect(data).rejects.toThrow('fail test')
})