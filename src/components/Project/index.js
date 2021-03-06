
function Project({project}) {
  console.log(project)
  // returns list of projects
  return (
    <li
      className={`flex-col-center `}
      key={project.name}
    >
      <div className="flex-col-center text-center project-info">
        <p className="bold-text title">{project.name}</p>
        <p className="project-desc">{project.description}</p>
        <a href={project.github} target="_blank" rel="noreferrer noopener">
          Git Hub Repo: {project.name}
        </a>
      </div>
      <a href={project.website} target="_blank" rel="noreferrer noopener">
        <figure>
          <img className="project-image" alt="project screenshot" src={project.image}></img>
          <figcaption>Click screenshot to go to deployed website</figcaption>
        </figure>
      </a>
      <br/><br/>
    </li>
  )
}

export default Project