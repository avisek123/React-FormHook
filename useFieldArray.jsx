import React from "react";
import "./styles.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {useForm,useFieldArray} from 'react-hook-form';
const UserInfo=(prop)=>{
  const {register}=prop;
  const {append,fields,remove}=useFieldArray({
    name:'users'
  });
  return(
    <>
    <div className='card mb-4'>
      <div className='card-header'>
        user Information
      </div>
     <div className='card-body'>
    {fields.map((item,index)=>(
      <>
       <div class="form-group">
    <label for="fullname">Full Name</label>
    <input type="text" class="form-control" id="fullname"
    name='fullname'
    ref={register} 
    />
  </div>
  <div class="form-group">
    <label for="email">Email address</label>
    <input type="email" class="form-control" id="email"
    name='email'
    ref={register}
    />
  </div>
   <div class="form-group">
    <label for="phone">Phone Number</label>
    <input type="text" class="form-control" id="phone"
    name='phone'
    ref={register}
    />
  </div>
  <div class="form-group">
    <label for="password">Password</label>
    <input type="password" class="form-control" id="password"
    name='password'
    ref={register}
    />
  </div>
<div>
  <button type='submit' className='btn btn-primary'>submit</button>
</div>
      </>
    ))}
     </div>
    
    </div>
 
    </>
  );
}

export default function App() {
 
  const {register,handleSubmit}=useForm();
  const onSubmit=(data)=>{
    console.log(data);

  }
  return (
    <div className="App">
    <div className='conatiner py-5'>
      <div className='card border-0 shadow p-4 w-50 mx-auto  '>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div class="form-group">
    <label for="fullname">Full Name</label>
    <input type="text" class="form-control" id="fullname"
    name='fullname'
    ref={register} 
    />
  </div>
  <div class="form-group">
    <label for="email">Email address</label>
    <input type="email" class="form-control" id="email"
    name='email'
    ref={register}
    />
  </div>
   <div class="form-group">
    <label for="phone">Phone Number</label>
    <input type="text" class="form-control" id="phone"
    name='phone'
    ref={register}
    />
  </div>
  <div class="form-group">
    <label for="password">Password</label>
    <input type="password" class="form-control" id="password"
    name='password'
    ref={register}
    />
  </div>

</form>
</div>


    </div>
  <UserInfo 
  register={register}
  />
    </div>
  );
}
