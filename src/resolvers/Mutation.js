import Test from '../models/testModel';

const Mutation = {

    createTest: async(parent , { input }) => {
       console.log(input);
        const test = new Test({
            ...input,
        });
        
        const testCreated = await test.save();
        return testCreated;
    }
   
    
}

export default Mutation;