const express=require('express');
const connectDatabase=require('./database');
const errorHandler=require('./middlewares/errorHandler');
const taskRouter=require('./routes/task');
const PORT=process.env.PORT || 5000;
const app=express();
connectDatabase();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api/v1/tasks',taskRouter);
app.use(express.static('public'));
app.use(errorHandler);
app.listen(PORT,()=>console.log(`listening to port ${PORT}`));




