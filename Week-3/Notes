### Steps to create backend with DB

1.Generate package.json
2.create express server
3.install mongoose and connect to mongoDB server 
       REST API- mongoDB native driver->DB server
       REST API-mongoose ODM (object ) tool ->DB server
 (// fetch can read,add,update,and delete data)
 (assynchronous op returns promise)
 4.build USER REST API  //resourse for this user api is user
             -Create user
             -read all users
             -read a user by id
             -update a user by id
             -delete a user by id

      [the above all are called as crud operations]

5.Create Schema and Model of the Resourse(USER)
      -The structure of the document should be there, for that we need to create schemaa
      -On this schema we need to develop a model

6.create USER API and,define the routes


### Steps to follow to refine the routes

->Handling Unavailaiable resources :
  (if user not found also we get success , to resolve this we use Hand.. Un.. Res..) (user api)


->Validators during update :
    (Validator rules will be followed only while creating(put) but not during the update(post), so to resovle this we use "runValidators:true") (user api)


->Hashing password :
   (hashing is prefferable over cryptography) (bcryptjs is the module avaliable in js) (user api)


->Unique fields :
    (if we create a obj which is already created, it will create without giving an error.so to s=resolve this we use unique fields)  (here we create atleast a single unique field zst same as id in dbs) (User model)


->Refined version of error handling middleware :
    (here this middleware takecare of server side errors also) (so we need the refined version)  (server-middleware)




### User Authentication (Login)
  -- (submit credentials and get token)

   -Public routes(by anyone) (crud operations can be done by anyone)
   -Producted routes(By authenticated users only)  (crud operations can be done by only the authenticated users only) (for this we use a middleware to verify the tokens which is called as tokenAuthenticationMiddleware)

   //To access cookies property of objects we need            otherwise request.cookies is undefenied
   

   ### Nested Documents
   same as nested objects, we'll have the nested documents
   Most of the real-world applications will be prsent in the form of nested docs
    < >
    
   ### .env It is not a js file .It is a configuration filr to hold the url and,port and secrete key
