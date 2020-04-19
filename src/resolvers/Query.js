import Test from '../models/testModel';

const Query= {
    getTests: async() => {
        const result = await Test.find({});
        return result;
    }
}
export default Query;