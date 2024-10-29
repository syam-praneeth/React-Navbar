import '../assign-2.2/notion.css'
import { FaGithub } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { FaInstagram } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { SiNotion } from "react-icons/si";

function Notion() {
    let articles = [
        {
          title: "Building Interactive UIs with React",
          description: "This article explores how React helps developers build fast, scalable, and dynamic user interfaces with component-based architecture.",
          author: "Syam Praneeth",
          date: "2023-11-18"
        },
        {
          title: "Impact of COVID-19 on Global Health Systems",
          description: "A comprehensive analysis of the strain COVID-19 placed on healthcare systems worldwide, highlighting key challenges and lessons learned.",
          author: "Dr. Rakesh Kumar",
          date: "2021-05-10"
        },
        {
          title: "The Rise of Blogging in the Digital Era",
          description: "This paper discusses the evolution of blogging from personal journaling to a powerful tool for digital marketing and personal branding.",
          author: "Azhar Ali",
          date: "2022-08-15"
        }
      ];
      
  return (
    <div>
        <div className='Navbar'>
        <div className="nleft">
            <ul className='ulflex1'>
            <li><SiNotion className='icon' /></li>
            <li>Notion</li>
            <li>About Author</li>
            <li>About this project</li>
            </ul>            
        </div>
        <div className="nright">
            <ul className='ulflex'>
                <li><FaGithub className='icon'/></li>
                <li><BiLogoGmail className='icon' /></li>
                <li><FaInstagram className='icon' /></li>
                <li><ImLinkedin  className='icon'/></li>
            </ul>
        </div>

    </div>
    </div>
  )
}

export default Notion;