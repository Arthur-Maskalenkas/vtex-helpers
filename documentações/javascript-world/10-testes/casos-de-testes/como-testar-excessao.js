
class sut {

  public handle() {
    throw new ErrorNotHaveSessionData()
  }
}


const targetClass = new sut()

await expect(targetClass.handle())
  .rejects
  .toThrow(expected);