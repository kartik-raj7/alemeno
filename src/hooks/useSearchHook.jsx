import { useState } from "react";
function useCourseSearch() {
    const [filteredCourses, setFilteredCourses] = useState();
    const [searchTerm, setSearchTerm] = useState('');
    const searchCourses = (term,initialCourses) => {
      setSearchTerm(term);
      setFilteredCourses(initialCourses)
      const newfilteredCourses = initialCourses.filter(course =>
        course.name.toLowerCase().includes(term.toLowerCase()) ||
        course.instructor.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredCourses(newfilteredCourses);
      console.log(filteredCourses)
    };
    const resetSearch = (initialCourses) => {
      setSearchTerm('');
      setFilteredCourses(initialCourses);
    };
    return [filteredCourses, searchCourses, resetSearch ];
}
export default useCourseSearch;