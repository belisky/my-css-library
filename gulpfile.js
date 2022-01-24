const {src,dest,watch,series}=require('gulp')
const sass = require('gulp-sass')(require('sass'));
const purgecss=require('gulp-purgecss')

function buildStyle() {
    return src('belcss/**/*.scss')
        .pipe(sass())
        .pipe(purgecss({content:['*.html']}))
    .pipe(dest('css'))
}

function watchTask() {
    watch(['belcss/**/*.scss','*.html'],buildStyle)
}


exports.default =series(buildStyle,watchTask)