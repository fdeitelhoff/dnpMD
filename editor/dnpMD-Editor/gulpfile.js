var gulp = require('gulp'),
    gulpSequence = require('gulp-sequence'),
    del = require('del'),
    inject = require('gulp-inject'),
    rename = require('gulp-rename'),
    electron = require('gulp-atom-electron'),
    symdest = require('gulp-symdest'),
    runElectron = require("gulp-run-electron");

gulp.task('private:clean', function(done){
    del.sync(['dist/**/*', 'packaged-app/**/*'], { force: true});
    done();
});

gulp.task('private:copy-app-package-file', function(){
    return gulp.src('src/app.package.json')
        .pipe(rename('package.json'))
        .pipe(gulp.dest('dist'));
});

gulp.task('private:copy-app-main-file', function(){
    return gulp.src('src/main.js')
        .pipe(gulp.dest('dist'));
});

gulp.task('private:copy-app-files', function(){
    return gulp.src('src/app/**/*')
        .pipe(gulp.dest('dist/app')) && gulp.src('src/controller/**/*')
            .pipe(gulp.dest('dist/app/controller')) && gulp.src('src/services/**/*')
            .pipe(gulp.dest('dist/app/services'));
});

gulp.task('private:copy-css-files', function(){
    return gulp.src('src/css/**/*')
        .pipe(gulp.dest('dist/css'));
});

gulp.task('private:copy-libs', function(){
    return gulp.src('lib/**/*').pipe(gulp.dest('dist/lib')) &&
        gulp.src('./node_modules/angular/**/*').pipe(gulp.dest('dist/lib/angular'));
});

gulp.task('private:build-html', function(){
    var sources = gulp.src([
        'dist/lib/angular/angular.js',
        'dist/lib/ace/ace.js',
        'dist/lib/ui-ace/ui-ace.js',
        //'dist/lib/require/require.js',
        'dist/app/**/*.js',
        'dist/lib/photon/css/photon.css',
        'dist/css/**/*.css']);

    return gulp.src('src/index.html')
        .pipe(inject(sources, {ignorePath: 'dist',  addRootSlash: false}))
        .pipe(gulp.dest('dist'));
});

gulp.task('private:test-electron', function(){
    gulp.src("dist").pipe(runElectron());
});

var buildApp = function(platform, slug){
    gulp.src(['dist/**/*'])
        .pipe(electron({
            version: '1.2.8',
            platform: platform }))
        .pipe(symdest('packaged-app/dnpMD-Editor-' + slug));
};

gulp.task('private:package-app', function(){
    var platforms = [{ platform: 'darwin', slug: 'osx'}, { platform: 'win32', slug: 'windows'}, { platform: 'linux', slug: 'linux'}];
    platforms.map(function(p){
        buildApp(p.platform, p.slug);
    });
});

gulp.task('test-electron', function(done){
    gulpSequence(
        'private:clean',
        'private:copy-app-package-file',
        'private:copy-app-main-file',
        'private:copy-libs',
        'private:copy-app-files',
        'private:copy-css-files',
        'private:build-html',
        'private:test-electron',
        done);
});

gulp.task('default', function(done){
    gulpSequence(
        'private:clean',
        'private:copy-app-package-file',
        'private:copy-app-main-file',
        'private:copy-libs',
        'private:copy-app-files',
        'private:copy-css-files',
        'private:build-html',
        'private:package-app',
        done);
});