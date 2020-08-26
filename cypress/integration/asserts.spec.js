it('Equality', () => {
  const number = 1;
  expect(number).equal(1);
  expect(number, 'deveria ser = 1').equal(1);
  expect(number).to.be.equal(1);
  expect('a').not.to.be.equal('b')
})

it('Truthy', () => {
  const a = true;
  const b = null;
  let c;

  expect(a).to.be.true
  expect(a).not.to.be.false

  expect(b).to.be.null;

  expect(c).to.be.undefined;
})

it('Object Equality', () => {
  const obj = { a: 1, b: 2 }

  expect(obj).not.be.empty;

  expect(obj).equal(obj);
  expect(obj).equals(obj);
  expect(obj).eq(obj);
  expect(obj).eql(obj);
  expect(obj).to.be.deep.equal({a: 1, b: 2});

  expect(obj).include({ b: 2 });
  expect(obj).to.have.property('b');
  expect(obj).to.have.property('b', 2);
})

it('Arrays', () => {
  const arr = [1, 2, 3];

  expect(arr).to.not.be.empty
  expect(arr).have.members([1, 2, 3])
  expect(arr).to.include.members([1, 3])
})