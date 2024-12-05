import Project from '../../components/project/project';
import ProjectType from '../../types/project';
import './right.css'

import space from '../../assets/imgs/space.png'
import countries from '../../assets/imgs/countries.png'
import todo from '../../assets/imgs/todo.png'
import portfolio from '../../assets/imgs/portfolio.png'
import product from '../../assets/imgs/products.jpg'
import testimonial from '../../assets/imgs/testimonial.jpg'
import clipboard2 from '../../assets/imgs/clipboard2.jpg'
import payment from '../../assets/imgs/payment.jpg'

const ProjectsRight = () =>{
  
  const projects: ProjectType[] = [
    {
      img: space,
      title: "Space Tourism",
      subtitle: "Space showcase",
      techs: ["React", "TypeScript", "Tailwind"],
      code: "https://github.com/Mbungai-Francesco/Space-Tourism",
      site: "https://space-tourism-psi-topaz.vercel.app/"
    },
    {
      img: product,
      title: "Product page",
      subtitle: "E-commerce",
      techs: ["HTML", "CSS", "JavaScript"],
      code: "https://github.com/Mbungai-Francesco/Product_page",
      site: "https://product-page-pi-one.vercel.app/"
    },
    {
      img: countries,
      title: "Country Explorer",
      subtitle: "Country Search",
      techs: ["React", "TypeScript", "Tailwind", "API"],
      code: "https://github.com/Mbungai-Francesco/Country-Search",
      site: "https://country-search-liard.vercel.app/"
    },
    {
      img: todo,
      title: "Todo webapp",
      subtitle: "Stay reminded",
      techs: ["Angular", "Tailwind"],
      code: "https://github.com/Mbungai-Francesco/Todo",
      site: "https://todo-mu-amber.vercel.app/"
    },
    {
      img: portfolio,
      title: "Portfolio",
      subtitle: "Ability showcase",
      techs: ["HTML", "CSS", "JavaScript"],
      code: "https://github.com/Mbungai-Francesco/Portfolio",
      site: "https://portfolio-nine-mauve-73.vercel.app/projects"
    },
    {
      img: testimonial,
      title: "Testimonials Section",
      subtitle: "Testimonials component",
      techs: ["HTML", "CSS"],
      code: "https://github.com/Mbungai-Francesco/Testimonial-Section/",
      site: "https://mbungai-francesco.github.io/Testimonial-Section/"
    },
    {
      img: clipboard2,
      title: "Clipboard landing page",
      subtitle: "Landing page",
      techs: ["HTML", "CSS"],
      code: "https://github.com/Mbungai-Francesco/Clipboard_page/",
      site: "https://mbungai-francesco.github.io/Clipboard_page/"
    },
    {
      img: payment,
      title: "Interactive card details",
      subtitle: "Interactive form",
      techs: ["HTML", "CSS", "JavaScript"],
      code: "https://github.com/Mbungai-Francesco/Interactive_Card_Form",
      site: "https://mbungai-francesco.github.io/Interactive_Card_Form/"
    },
    {
      img: "",
      title: "Coming Soon",
      subtitle: "Still working",
      techs: [],
      code: "",
      site: ""
    }
  ];

  return (
    <>
      <div className="h-full w-full overflow-y-scroll overflow-x-hidden myblocks">
        <div className="h-full w-[85%] justify-around   m-auto px-4 ">
        {/* <SkillBox skill={icons[1]}/> */}
        {
          projects.map((project, index) => (
            <Project key={index} pro={project} />
          ))
        }
        </div>
      </div>
    </>
  )
}

export default ProjectsRight;