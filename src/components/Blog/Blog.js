import React from 'react';

const Blog = () => {
    return (
        <div className='text-center m-5 text-gray'>
            <div>
                <h3>Difference between javascript and nodejs?</h3>
                <p>
                    JavaScript may be a lightweight, cross-platform, interpreted scripting programing language that's primarily used for client-side scripting. It's built into both Java and HTML. On the opposite hand, Node.js may be a server-side scripting language supported the Google Chrome V8 engine. As a result, it's wont to build network-centric applications. it's a distributed system that's used for data-intensive real-time applications.
                    JavaScript may be a simple programing language that would be run in any browser that supports the JavaScript Engine. On the opposite hand, Node.js may be a running environment or interpreter for the JavaScript programing language . It needs libraries which will be easily accessed from JavaScript programming to form it more useful.
                    JavaScript can run on any engine, including Firefox's Ateles geoffroyi , Safari's JavaScript Core, and V8 (Google Chrome). As a result, JavaScript programming is extremely simple to make , and any running environment is like a correct browser. On the opposite hand, Node.js only supports the V8 engine, which is exclusive to Google Chrome. However, written JavaScript code can run in any environment, no matter whether it supports the V8 engine.
                    A particular non-blocking task is required to access any OS . There are some basic objects in JavaScript, but they're all os-specific. for instance , ActiveX Control may be a Windows-only application. However, Node.js is granted the power to run non-blocking tasks unique to the OS from any JavaScript programming. There are not any os-specific constants in it. Node.js is well-versed in creating a transparent binding with the filing system , allowing the developer to read and write to disk.
                    For one web application, JavaScript is usually used for any client-side operation. An operation could also be handling business validation, dynamic page display at a group interval , or an easy Ajax call. For any web application, these are used for a maximum amount of your time . On the opposite hand, Node.js is usually used for non-blocking accessibility or execution of any OS . On an OS , a non-blocking operation involves generating or executing a shell script, retrieving unique hardware-related information during a single call, obtaining installed certificate details within the system, or performing an outsized number of specified tasks.
                    JavaScript's main advantages include a good range of interfaces and interactivity and just the proper amount of server contact and direct input to visitors. On the opposite hand, Node.js features a node package manager with over 500 modules and therefore the ability to handle concurrent requests. It also has the special capability of supporting micro-service architecture also as IoT.
                </p>
            </div>
            <div>
                <h3>Differences between sql and nosql databases.</h3>
                <p>
                    SQL databases are relational, NoSQL databases are non-relational.
                    SQL databases use structured command language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.
                    SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.
                    SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.
                    SQL databases are better for multi-row transactions, while NoSQL is best for unstructured data like documents or JSON.
                </p>
            </div>
            <div>
                <h3>What is the purpose of jwt and how does it work?</h3>
                <p>
                    JSON Web Token may be a standard wont to create access tokens for an application.

                    It works this way: the server generates a token that certifies the user identity, and sends it to the client.

                    The client will send the token back to the server for each subsequent request, therefore the server knows the request comes from a specific identity.

                    This architecture proves to be very effective in modern Web Apps, where after the user is authenticated we perform API requests either to a REST or a GraphQL API.

                    Who uses JWT? Google, for instance . If you employ the Google APIs, you'll use JWT.

                    A JWT is cryptographically signed (but not encrypted, hence using HTTPS is mandatory when storing user data within the JWT), so there's a guarantee we will trust it once we receive it, as no middleman can intercept and modify it, or the info it holds, without invalidating it.

                    That said, JWTs are often criticized for his or her overuse, and particularly for them getting used when less problematic solutions are often used.

                    You need to make your opinion round the subject. I am not advocating for a technology over another, just presenting all the opportunities and tools you've got at your disposal.

                    What are they good for? Mainly API authentication, and server-to-server authorization.
                </p>
            </div>
        </div>
    );
};

export default Blog;