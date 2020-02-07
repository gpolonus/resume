import React from 'react';
import './QuetaApp.css';
import data from './queta-data'

const Lines = ({ lines }) => (
  <div className="Lines">
    <ul>
      {
        lines.map(({ content }) => (
          <li key={content} className="Line">
            { content }
          </li>
        ))
      }
    </ul>
  </div>
)

const PrefixLines = ({ lines }) => (
  <div className="Lines">
    <ul>
      {
        lines.map(({ prefix, content }) => (
          <li key={prefix} className="Line">
            <strong>{ prefix }:</strong> { content }
          </li>
        ))
      }
    </ul>
  </div>
)

const Project = ({ p: { title, lines }}) => (
  <div className="Project">
    <div className="title">
      { title }
    </div>
    <Lines lines={lines} />
  </div>
)

const Role = ({ r: { title, lines, when, projects } }) => console.log({ title, lines, when, projects }) || (
  <div className="Role">
    <div className="title">
      <strong>{ title }</strong><Pipe />{ when }
    </div>
    {
      !!lines && <Lines lines={lines} />
    }
    {
      !!projects && projects.map(p => (
        <Project key={p.title} p={p} />
      ))
    }
  </div>
)

const Company = ({ c: { title, where, roles } }) => (
  <div className="Company">
    <h3>
      { title }, { where }
    </h3>
    {
      roles.map(r => <Role key={r.title} r={r} />)
    }
  </div>
)

const SkillSection = ({ title, skills, width }) => {
  return (
    <div className="SkillSection" style={{ width }}>
      {
        !!title && <div className="title">{title}:</div>
      }
      {
        skills.map(s => (
          <div key={s} className="skill">
            {s}
          </div>
        ))
      }
    </div>
  )
}

const Pipe = () => <>&nbsp;&nbsp;|&nbsp;&nbsp;</>

const Header = ({ name, phone, website, email }) => (
  <div className="Header">
    <h1>{name}</h1>
    <div>
      {[
        email && <>{email}</>,
        phone && <><Pipe />{phone}</>,
        website && <><Pipe />{website}</>
      ]}
    </div>
  </div>
)

const SectionHeader = ({ title }) => (
  <div className="SectionHeader">
    <span className="title">{title}</span>
    <hr />
  </div>
)

const Section = ({ title, children }) => (
  <div className="Section">
    <SectionHeader title={title} />
    <div className="contents">
      {children}
    </div>
  </div>
)

function QuetaApp({ bn: businessName }) {
  const {
    name,
    phone,
    email,
    website,
    companies,
    skillSections,
    projects,
    education: e
  } = data

  const skillsSectionWidth = `${100 / skillSections.length}%`

  return (
    <div className="QuetaApp">
      <Header
        name={name}
        phone={phone}
        email={email}
        website={website}
      />
      <Section title="Career-Objective">
        <div className="ObjectiveWrapper">
          <div className="Objective">
            Results-oriented and data driven professional with 2.5+ years of experience and proven knowledge of process improvement and lead times. Aspiring to add value with my skills and effectively fill the role at { businessName }.
          </div>
        </div>
      </Section>
      <Section title="Experience">
        {
          companies.map((c) =>
            <Company key={c.title} c={c} />
          )
        }
      </Section>
      {
        !!projects && (
          <Section title="Projects">
            <PrefixLines lines={projects}/>
          </Section>
        )
      }
      <Section title="Education">
        <div className="Education">
          <div>
            { e.place }<Pipe />{ e.where }<Pipe />{ e.when }
          </div>
          <div>
            <strong>{ e.degree }:</strong> { e.major }
          </div>
        </div>
      </Section>
      <Section title="Skills &amp; Involement">
        <div className="skillsWrapper">
        {
          skillSections.map(({ title, skills }) =>
            <SkillSection
              key={title}
              title={title}
              skills={skills}
              width={skillsSectionWidth}
            />
          )
        }
        </div>
      </Section>
    </div>
  );
}

export default QuetaApp;
