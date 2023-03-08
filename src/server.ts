import express, { Application} from 'express';
import movieRoutes from './routes/movie.routes'
import reviewRoutes from './routes/review.routes'
import { errorMiddleware } from './middleware/error';
import 'express-async-errors'

class App {
  private app: Application;

  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  private middlewares(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(errorMiddleware)
  }

  private routes(): void {
    this.app.use('/', movieRoutes);
    this.app.use('/', reviewRoutes);
  }

  public start(): void {
    const port = 3001;
    this.app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  }
}

const app = new App();
app.start();
