import * as Falcor from 'falcor';
import HttpDataSource from 'falcor-http-datasource'

const FALCOR_MODEL_URL = process.env.REACT_APP_FALCOR_MODEL_URL || '';

export default new Falcor.Model({
    source: new HttpDataSource(FALCOR_MODEL_URL)
})