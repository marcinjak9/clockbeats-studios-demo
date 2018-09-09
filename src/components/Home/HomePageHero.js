import React from 'react'
import HeroForm from './HeroForm'

const HomePageHero = (props) => {
  const {
    title, payoff, backgroundImage, dropdownOptions, formTitle, showForm,
  } = props
  return (
    <section className="container-fluid hero d-flex flex-column justify-content-center" style={{ backgroundImage: `url('${backgroundImage}')` }}>
      <div className="hero-overlay" />
      <div className="container">
        <div className="row">
          <div className="col-md-7 text-col">
            <h1 className="text-white title">{title}</h1>
            <p className="lead text-white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas adipisci quod voluptatem amet fugit assumenda ipsa dolore iusto repellendus nesciunt deserunt a saepe doloribus, aut est harum, necessitatibus ullam debitis!
            </p>
          </div>
          {showForm && (
            <div className="col-md-5">
              <HeroForm dropdownOptions={dropdownOptions} title={formTitle} />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default HomePageHero
