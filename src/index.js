import dva from 'dva';
import './index.css';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);
app.model(require('./models/login').default)
app.model(require('./models/edit').default)
app.model(require('./models/class').default)
app.model(require('./models/course').default)


// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
