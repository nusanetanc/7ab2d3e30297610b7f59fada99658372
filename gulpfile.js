var gulp = require('gulp');

var appIsDev = 'assets/app/is/';
var appMyDev = 'assets/app/my/';
var appIsProd = 'public/js/app/is/';
var appMyProd = 'public/js/app/my/';

/* JS & TS */
var jsuglify = require('gulp-uglify');
var typescript = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');

// Other
var concat = require('gulp-concat');

var tsProject = typescript.createProject('tsconfig.json');


gulp.task('build-ts', function () {
    return gulp.src(appIsDev + '**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(typescript(tsProject))
        .pipe(sourcemaps.write())
        // .pipe(jsuglify())
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest(appIsProd));

        return gulp.src(appMyDev + '**/*.ts')
            .pipe(sourcemaps.init())
            .pipe(typescript(tsProject))
            .pipe(sourcemaps.write())
            // .pipe(jsuglify())
            .pipe(concat('bundle.js'))
            .pipe(gulp.dest(appMyProd));
});
gulp.task('watch', function () {
    gulp.watch(appIsDev + '**/*.ts', ['build-ts']);
      gulp.watch(appMyDev + '**/*.ts', ['build-ts']);
});

gulp.task('default', ['watch', 'build-ts']);
