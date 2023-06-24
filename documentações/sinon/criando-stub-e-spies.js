// é importante se lembrar que cada função ganha novas propriedades do prototype após um stub utilizar ela

// Exemplo abaixo utiliza .spy e .stub. Cada função mencionada ganha um spy.

it('given a carCategory it should return an available car', async () => {
  const car = mocks.validCar

  // Criando um objeto, e não pegando apenas a referencia.
  const carCategory = Object.create(mocks.validCarCategory)
  carCategory.carIds = [ car.id ]

  sandbox.stub(
    carService.carRepository,
    carService.carRepository.find.name,
  ).resolves(car)

  sandbox.spy(
    carService,
    carService.chooseRandomCar.name,
  )

  const result = await carService.getAvailableCar(carCategory)
  const expected = car

  // bdd é tudo mais semantico
  expect(result).to.be.deep.equal(expected)
  expect(carService.chooseRandomCar.calledOnce).to.be.ok
  expect(carService.carRepository.find.calledWithExactly(car.id)).to.be.ok

})

Essas propriedades como calledOnce ou calledwithexactly podem ser utilizadas como spies