liliapp.controller("contactus-controller" , function($scope,$http) {
    	$scope.model={firstname: "", lastname:" ", email:"", comment:"", course: "", phone: "", city:"", address:"", createdDate : ""}

    	$scope.submitClicked=function  () {
         $http.post('/api/contactus', $scope.model)
         		.success(function(data, status, headers, config) {
      				$scope.displayerror=true;
      				$scope.isSuccess=true;
      				//$scope.posts = data.posts;
    			});
		}

		$scope.clearClicked=function  () {
        		$scope.model={firstname: "", lastname:" ", email:"", comment:"", course: "", phone: "", city:"", address:"", createdDate : ""};
        		$scope.displayerror=false;
    	};
    	// $scope.model={firstname: "fname", lastname:"lname ", email:"test@gmail.com", query:"test query"}
})

.controller("course-controller" , function($scope) {    	
    	
    	$scope.model=[{"coursecode": "fname", "coursename":"lname"}, 
    					{"coursecode": "1", "coursename":"c1 "},
    					{"coursecode": "2", "coursename":"c2 "},
    					{"coursecode": "3", "coursename":"c3 "}
    	];
})

.controller("admin-controller" , function($scope, $http) {
      
    $scope.model=[];
    var tempModel=[];
    $http.get('/api/contactus')
    	.success(function(data, status, headers, config) {
      		angular.forEach(data,function(val,key){
         		var res={"fname":val.firstname,"lastname":val.lastname,"email":val.email,"comment":val.comment};
        		tempModel.push(res);
      		});
     		$scope.model=tempModel;
    	});
})


.controller("blog-edit-controller" , function($scope, $http) {
    	
    $scope.model={heading : "", blogContent: "", createdBy:"kprakasht@gmail.com", createdDate:new Date(), isApproved:true};
    $scope.submitClicked=function  () {
         
        $http.post('/api/blogs', $scope.model)
         	.success(function(data, status, headers, config) {
      			//$scope.model= data;
      			$scope.displayerror=true;
      			$scope.isSuccess=true;
    		});
    }

    $scope.clearClicked=function  () {
        $scope.model={heading : "", blogContent: "", createdBy:"kprakasht@gmail.com", createdDate:new Date(), isApproved:true};
        $scope.displayerror=false;
    };
})


.controller("blogs-controller" , function($scope, $http) {
      
    $scope.model={heading : "", blogContent: "", createdBy:"kprakasht@gmail.com", createdDate:new Date(), isApproved:true};
    var tempModel=[];
    $http.get('/api/blogs')
    	.success(function(data, status, headers, config) {
      		$scope.model = data;
    	});
});