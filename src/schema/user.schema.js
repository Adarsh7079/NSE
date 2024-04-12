import mongoose from 'mongoose';


const schema =new mongoose.Schema({
    symbol:{
        type:String
    },
    companyName:{
        type:String
    },
    industry:{
        type:String
    },
    audited:{
        type:String
    },
    cumulative:{
        type:String
    },
    indAs:{
        type:String
    },
    reInd:{
        type:String
    },
    period:{
        type:String
    },
    relatingTo:{
        type:String
    },
    financialYear:{
        type:String
    },
    filingDate:{
        type:String
    },
    seqNumber:{
        type:Number
    },
    bank:{
        type:Number
    },
    fromDate:{
        type:Number
    },
    toDate:{
        type:Number
    },
    oldNewFlag:{
        type:Number
    }
})

export const Data=mongoose.model("data",schema);