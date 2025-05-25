import { Link } from 'react-router-dom'
import projects from './projects'

const Project = () => {
  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold mb-4'>Project List</h1>
      <ul className='space-y-2'>
        {projects.map((project) => (
          <li key={projects.projectId} className='bg-gray-100 p-4 rounded'>
            <Link to={`/projects/${project.projectId}`} className='text-blue-500 hover:underline'>
              {project.projectName}
            </Link>
          </li>
        ))}      
      </ul>
    </div>
  )
}

export default Project