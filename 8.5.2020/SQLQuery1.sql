create procedure usp_GetEmpDetails
as begin
	select EmpName, DeptNo from Employees
end

