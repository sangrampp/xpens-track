var gulp        = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var bowerDir = './bower_components';

var jsFiles = [
    './bower_components/angular/angular.js',
    './bower_components/angular-ui-router/release/angular-ui-router.js',
    'app/js/src/app.js',
    'app/js/src/config/RouteConfig.js',
    'app/js/src/config/StateChange.js',   
    'app/js/src/services/DataService.js',     
    // 'app/js/src/controllers/LoginController.js',
    'app/js/src/controllers/UserController.js',
    'app/js/src/controllers/ExpenseController.js'   
]

var cssFiles = [
    './bower_components/bootswatch/flatly/bootstrap.css',    
    'app/css/src/app.css' 
]

  gulp.task('scripts', function(){
        return gulp.src(jsFiles)
            .pipe(concat('main.js'))
            .pipe(gulp.dest('app/js'));
    });

  gulp.task('sass', function () {
    return gulp.src(cssFiles)
      .pipe(concat('main.css'))      
      .pipe(gulp.dest('app/css'));
  });

  gulp.task('watch', function() {
    gulp.watch('app/js/src/*.js', ['scripts']);
    gulp.watch('app/js/src/**/*.js', ['scripts']);
    gulp.watch('app/css/src/*.css', ['sass']);
  });

// gulp.task('default', ['sass', 'serve']);
gulp.task('default', ['scripts', 'sass', 'watch']);
