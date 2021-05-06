const getMessages=require('./messages')
test('get method should be defined', () => {
  expect(getMessages).toBeDefined()
})
const postMessage=require('./messages')
const mockRequestOne = { body:{
  message: 'abc123',
  userId: 'abc456'
  }
}
const mockRequestTwo = { body:{
  message: 'abc123'
  }
}
const mockResponse ={ 
  messages:[{message:'aa', userId:'wfwf'}],

}

describe ("Post method --", () => {

  it('should be defined', () => {
  expect(postMessage).toBeDefined()
})
  it('Should find user ID in mockRequestOne',() => {
    expect(mockRequestOne.body.userId).toBeDefined()
  })
  it('Should fail to find user ID in mockRequestTwo',() => {
    expect(mockRequestTwo.body.userId).not.toBeDefined()
  })
})
