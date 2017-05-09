var gulp = require('gulp');

var appIsDev = 'assets/app/is/';
var appMyDev = 'assets/app/my/';
var appMySignDev = 'assets/app/signin-my/';
var appPublicDev = 'assets/app/public/';
var appSignupDev = 'assets/app/signup/';
var appLoginDev = 'assets/app/login-is/';
var appIsProd = 'public/js/app/is/';
var appMyProd = 'public/js/app/my/';
var appMySignProd = 'public/js/app/signin/';
var appPublicProd = 'public/js/app/public/';
var appSignupProd = 'public/js/app/signup/';
var appLoginProd = 'public/js/app/login/';

/* JS & TS */
var jsuglify = require('gulp-uglify');
var typescript = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');

// Other
var concat = require('gulp-concat');

var tsProject = typescript.createProject('tsconfig.json');


gulp.task('build-ts1', function () {
    return gulp.src(appIsDev + '**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(typescript(tsProject))
        .pipe(sourcemaps.write())
        // .pipe(jsuglify())
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest(appIsProd));
});

gulp.task('build-ts2', function () {
        return gulp.src(appMyDev + '**/*.ts')
            .pipe(sourcemaps.init())
            .pipe(typescript(tsProject))
            .pipe(sourcemaps.write())
            // .pipe(jsuglify())
            .pipe(concat('bundle.js'))
            .pipe(gulp.dest(appMyProd));
});
gulp.task('build-ts3', function () {
        return gulp.src(appPublicDev + '**/*.ts')
            .pipe(sourcemaps.init())
            .pipe(typescript(tsProject))
            .pipe(sourcemaps.write())
            // .pipe(jsuglify())
            .pipe(concat('bundle.js'))
            .pipe(gulp.dest(appPublicProd));
});
gulp.task('build-ts4', function () {
        return gulp.src(appMySignDev + '**/*.ts')
            .pipe(sourcemaps.init())
            .pipe(typescript(tsProject))
            .pipe(sourcemaps.write())
            // .pipe(jsuglify())
            .pipe(concat('bundle.js'))
            .pipe(gulp.dest(appMySignProd));
});
gulp.task('build-ts5', function () {
        return gulp.src(appSignupDev + '**/*.ts')
            .pipe(sourcemaps.init())
            .pipe(typescript(tsProject))
            .pipe(sourcemaps.write())
            // .pipe(jsuglify())
            .pipe(concat('bundle.js'))
            .pipe(gulp.dest(appSignupProd));
});
gulp.task('build-ts6', function () {
    return gulp.src(appLoginDev + '**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(typescript(tsProject))
        .pipe(sourcemaps.write())
        // .pipe(jsuglify())
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest(appLoginProd));
});

gulp.task('watch', function () {
    gulp.watch(appIsDev + '**/*.ts', ['build-ts1']);
    gulp.watch(appMyDev + '**/*.ts', ['build-ts2']);
    gulp.watch(appPublicDev + '**/*.ts', ['build-ts3']);
    gulp.watch(appMySignDev + '**/*.ts', ['build-ts4']);
    gulp.watch(appSignupDev + '**/*.ts', ['build-ts5']);
    gulp.watch(appLoginDev + '**/*.ts', ['build-ts6']);
});

gulp.task('default', ['watch', 'build-ts1']);
gulp.task('default', ['watch', 'build-ts2']);
gulp.task('default', ['watch', 'build-ts3']);
gulp.task('default', ['watch', 'build-ts4']);
gulp.task('default', ['watch', 'build-ts5']);
gulp.task('default', ['watch', 'build-ts6']);
