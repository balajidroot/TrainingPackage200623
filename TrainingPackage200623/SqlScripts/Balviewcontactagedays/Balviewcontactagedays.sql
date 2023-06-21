CREATE or ALTER VIEW Balviewcontactagedays
AS
SELECT Id AS Balid, Name AS Balname, BirthDate AS Balbirthdate, DATEDIFF(day, BirthDate, GETDATE()) AS Balagedays
FROM Contact
GO