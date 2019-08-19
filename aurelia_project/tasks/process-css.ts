import * as gulp from 'gulp';
import * as sourcemaps from 'gulp-sourcemaps';
import * as sass from 'gulp-sass';
import * as project from '../aurelia.json';
import { build } from 'aurelia-cli';
import * as importOnce from 'node-sass-import-once';

export default function processCSS()
{
  return gulp.src(project.cssProcessor.source)
    .pipe(sass({
      importer: importOnce,
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(build.bundle());
};
