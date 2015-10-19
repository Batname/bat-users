import config, { projectRoot } from 'config';
import co from 'co';
import path from 'path';
import gutil from 'gulp-util';
import mongoose from '../utils/mongoose';
const loadModels = require(path.join(config.projectRoot, '/utils/load-models'));
const oid = require(path.join(config.projectRoot, '/utils/oid'));

export default function (options) {
    return cb => {
        return co(function* () {
            let args, dbPath, modelPath, Model;

            args = require('yargs')
                .example("gulp db:load --model /services/node_modules/bat-users/models/user --from /services/node_modules/bat-users/fixture/users")
                .describe('from', 'file to import')
                .describe('model', 'model to import')
                .demand(['from', 'model'])
                .argv;

            dbPath = path.join(projectRoot, args.from);
            modelPath = path.join(projectRoot, args.model);

            gutil.log('loading file ' + dbPath);
            gutil.log('loading model ' + modelPath);

            yield loadModels( require(dbPath).User( {oid: oid} ), require(modelPath) );

            gutil.log("loaded db " + dbPath);
            mongoose.disconnect();
        });
    }
};

