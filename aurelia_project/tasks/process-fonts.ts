import * as gulp from 'gulp';
import * as changedInPlace from 'gulp-changed-in-place';
import * as project from '../aurelia.json';
import { build } from 'aurelia-cli';

export default function processFonts()
{
  let sources: string[] = [];

  let kendoFontSource: string = 'node_modules/@progress/kendo-ui/css/web/fonts/glyphs';
  let kendoFontDestination: string = 'fonts/glyphs';
  let kendoFontFileNames: string[] = ['WebComponentsIcons.ttf', 'WebComponentsIcons.woff'];

  for (let kendoFontFileName of kendoFontFileNames)
  {
    sources.push(`${kendoFontSource}/${kendoFontFileName}`);
  }

  return gulp.src(sources)
    .pipe(gulp.dest(kendoFontDestination));  
};
