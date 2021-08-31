# Basic CRUD API for blog
*Create, Read all or single blog, update and delete blog*


## Routes 
base url:	 *localhost:6969/api/v1/blog*

 - "/"	 **GET** 	- get all routes
 - "/"	**POST**	-create a blog 
	 - name
	 - title
	 - subHeading
	 - verified
	 - content
	 *to be passed in body*
 - "/:id"	**GET**	-get the blog that matches the id
 - "/:id"	**POST**	-update the blog that matches the id
 - "/:id"	**DELETE**	-delete the blog that matches the id

