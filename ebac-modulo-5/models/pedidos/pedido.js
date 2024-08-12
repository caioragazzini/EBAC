const {Schema} = require('mongoose');

const PedidoSchema = new Schema({

    cliente:{
        nome:{
            type: String,
            required : true
        },
        sobrenome:{
            type:String,
            required: true,
        }
      },
      pizza:[
      {
        sabor:{
            type:String,
            required: true,
        },
        quantidade:{
            type:Number,
            required: true,
        },
        tamanho:{
            type: String,
            required:true,
            enum:['Pequeno', 'Medio', 'Grande']

        }
      }],
      metodoPagamento:{
        type:String,
        required: true,
        enum: ['PIX', 'Cartão Credito']

      },
      total:{
            type:Number,
            required: true,
      },
      pago:{
        type:Boolean,
        default:false,
      }
});

module.exports = PedidoSchema;