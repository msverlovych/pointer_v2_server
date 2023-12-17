![Pointer](https://res.cloudinary.com/bandmsociety/image/upload/v1702817433/pointer/store/aqusmbg8oubtydepy3hw.png)

# Pointer - Backend

Welcome to the backend of Pointer server application responsible for handling requests, interacting with the OpenAI API, and managing data storage with MongoDB and Cloudinary CDN.

## Technology Stack

### Backend

- **Express.js:** The backend is built using Express.js, a fast and minimalistic web framework for Node.js.
- **Node.js:** Utilize the power of Node.js for server-side JavaScript execution.
- **MongoDB:** Store and retrieve generated images and user data in a MongoDB database.
- **OpenAI API:** Communicate with the OpenAI API to generate images based on prompts.
- **Cloudinary CDN:** Store and serve images efficiently using the Cloudinary Content Delivery Network.

## Getting Started

1. Clone the repository: `https://github.com/Maxim-Sverlovych/pointer_v2_server.git`
2. Install dependencies:
   ```bash
   cd pointer_v2_server
   npm install or npm install --legacy-peer-deps
   
3. Configure environment variables. Create a .env file in the root directory with the following variables:
- **PORT=** 3000
- **DATABASE_URL=** SEQURE_URL
- **OPEN_AI_API_KEY=** OPEN_AI_API_KEY
- **CLOUDINARY_CLOUD_NAME=** CLOUDINARY_CLOUD_NAME
- **CLOUDINARY_API_KEY=** CLOUDINARY_API_KEY
- **CLOUDINARY_API_SECRET=** CLOUDINARY_API_SECRET
- **CLOUDINARY_PUBLIC_ID_PREFIX=** CLOUDINARY_PUBLIC_ID_PREFIX
4. Run application:
   ```bash 
   npm run dev
