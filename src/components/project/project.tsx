import ProjectType from '../../types/project';
import './project.css'

interface ProjectProps {
  pro : ProjectType
}

const Project = ({ pro }: ProjectProps) => {
	return (
		<div className="bg-white cursor-pointer mb-6 shadow-lg">
      <img src={pro.img} alt=""/>
        <div className="blocks_bottom p-4">
          <div className="descript">
            <p className='text-lg font-semibold'>{pro.title}</p>
            <p className="text-myGray-100">{pro.subtitle}</p>
          </div>
          <div className="text-lg font-normal mb-2 text-wrap"> {pro.techs.map(tech => (
              <span className='mr-3'>{tech}</span>
            ))}
          </div>
          <div className="flex">
            <a href={pro.code} className="flex items-center myLinks mr-4" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="dark:fill-white fill-black2" viewBox="0 0 24 24"><path stroke="none" d="M0 0h24v24H0z"/><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/></svg>
              <p className='text-lg font-normal text-myGray-200 ml-2'>Code</p>
            </a>
            <a href={pro.site} className="flex items-center myLinks mr-4" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" stroke="currentColor" stroke-width="0" className="text-black" viewBox="0 0 1024 1024"><path stroke="none" d="M396 512a112 112 0 1 0 224 0 112 112 0 1 0-224 0zm546.2-25.8C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM508 688c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z"/></svg>
              <p className='text-lg font-normal text-myGray-200 ml-2'>View site</p>
            </a>
          </div>
        </div>
    </div>
	);
};

export default Project;
