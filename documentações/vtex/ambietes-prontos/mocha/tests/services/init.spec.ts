import { VtexRepositoryAccount } from './../../../react/services/infra/vtex-repository-account';
import { GetSkuListFromProduct } from './../../../react/services/presentation/get-sku-list-from-product';
import "mocha";
import { expect} from 'chai'
import { describe } from "mocha";
import sinon, { SinonStatic, SinonStub } from 'sinon';
import {WindowResolver} from '../../../react/services/infra';
import {UseFetchModule} from '../../../react/services/utilities';


describe('teste 1', () => {
  let sut: GetSkuListFromProduct;
  let sandbox = {} as SinonStatic
  let getUser = {} as VtexRepositoryAccount

  beforeEach(() => {
    sandbox = sinon.createSandbox() as any
    getUser = new VtexRepositoryAccount();

    sut = new GetSkuListFromProduct(getUser);
  });

  afterEach(() => {
    sandbox.restore()
  });

  it('testee', async () => {
    sandbox.stub(UseFetchModule, 'useFetch').resolves({})
    sandbox.stub(WindowResolver, 'getCurrentUrl').returns('http://example.com/');
    sandbox.stub(getUser, 'handle').resolves('usuario1')

    const response:any = await sut.handles()

    expect(response.user).to.be.equal('usuario1');
    expect(response.url).to.be.equal('http://example.com/')
  });
});
