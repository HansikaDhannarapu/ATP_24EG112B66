1. Generate package.json
      npm init -y

2. Create .env file
3. Create express app & assign PORT NUMBER
4. Connect to DB(install mongoose)\
5. Define Schemas and create Models
    - UserTypeSchema
        - firstName
        - lastName
        - email
        - password
        - role
        - profileImageUrl
        - isUserActive

    - ArticleSchema
        - author
        - title
        - category
        - content
        - comments
        - isArticleActive
6. Implement APIs