import morgan from 'morgan';
import chalk from 'chalk';

morgan.token('coloredStatus', (req, res) => {
    const status = res.statusCode;
    const colorizedStatus =
        status >= 500 ? chalk.red(status) : chalk.green(status);
    return colorizedStatus;
});

const logger = morgan(
    ':method :url :coloredStatus :response-time ms - :res[content-length]',
    {
        stream: process.stdout,
    }
);

export default logger;