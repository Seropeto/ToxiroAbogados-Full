import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="dashboard-container">
    <aside class="sidebar">
      <h2>Toxiro</h2>
      <nav>
        <ul>
          <li>Dashboard</li>
          <li>Casos</li>
          <li>Citas</li>
        </ul>
      </nav>
    </aside>
    <main class="main-content">
      <header>
        <h1>Panel de Control Principal</h1>
      </header>
      <section class="grid">
        <div class="card">
          <h3>Casos Activos</h3>
          <p>12 casos bajo seguimiento</p>
        </div>
        <div class="card">
          <h3>Próximas Citas</h3>
          <p>3 citas para hoy</p>
          <button class="btn-primary">Nueva Cita</button>
        </div>
      </section>
    </main>
  </div>
`
