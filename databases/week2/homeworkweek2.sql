use hyfhomeworkweek2;

SET NAMES utf8mb4;

#CREATING STUDENT TABLE
CREATE TABLE `STUDENT` (
 `ID` INT(10) UNSIGNED NOT NULL auto_increment primary KEY ,
 `NAME` varchar(255) NOT NULL , 
 `CLASS` varchar(255) NOT NULL ,
 `EMAIL` VARCHAR(255) NOT NULL ,
 `PHONE` VARCHAR(255) NULL
 ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

 # CREATING COURSE TABLE 
 CREATE TABLE `COURSE` (
 `ID` INT(10) UNSIGNED NOT NULL  primary KEY ,
 `COURSE` varchar(255) NOT NULL ,
 `PREREQUIESTS` VARCHAR(255) NULL,
 `START_DATE` DATETIME  NOT NULL,
 `END_DATE` DATETIME NULL

 ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
 
 # CREATING LINKING TABLE FOR MANY TO MANY RELATION
 CREATE TABLE COURSE_STUDENT (
 `STUDENT_ID`  INT(10) UNSIGNED NOT NULL,
 `COURSE_ID` INT(10) UNSIGNED NOT NULL,
 PRIMARY KEY (`STUDENT_ID`,`COURSE_ID`),
 CONSTRAINT `FK_COURSE_STUDENT_STUDENT` FOREIGN KEY (`STUDENT_ID`) REFERENCES `STUDENT` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE,
 CONSTRAINT `FK_COURSE_STUDENT_COURSE` FOREIGN KEY (`COURSE_ID`) REFERENCES `COURSE` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE
 )ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
 
 DESCRIBE STUDENT;
 
#INSERTING VALUES INTO TABLE STUDENT
INSERT INTO STUDENT (NAME,CLASS,EMAIL,PHONE) VALUES ('Hakki','08','HAKKI@YAHOO.COM','123-456-666');
INSERT INTO STUDENT (NAME,CLASS,EMAIL,PHONE) VALUES ('NAYANA','09','NAYANA@MAIL.COM','123-772-666');
INSERT INTO STUDENT (NAME,CLASS,EMAIL,PHONE) VALUES ('BADR','07','BDR@GMAIL.COM','123-555-666');
INSERT INTO STUDENT (NAME,CLASS,EMAIL,PHONE) VALUES ('KSENIA','08','KSN@YAHOO.COM','123-191-666');
INSERT INTO STUDENT (NAME,CLASS,EMAIL,PHONE) VALUES ('KEERTHI','08','KA@YAHOO.COM','');

#SELECTING AFTER INSERTION
 SELECT * FROM STUDENT;
 
 DESCRIBE COURSE;
 
 # INSERTING VALUES TO COURSE TABLE
 INSERT INTO COURSE (ID,COURSE,PREREQUIESTS,START_DATE,END_DATE) VALUES (2 , 'CSS','HTML','2018-10-05 06:54:16', '2018-10-20 13:05:09');
 INSERT INTO COURSE (ID,COURSE,PREREQUIESTS,START_DATE,END_DATE) VALUES (5 , 'NODEJS','JAVASCRIPT','2017-10-25 06:54:16', '2017-10-15 13:05:09');
 INSERT INTO COURSE (ID,COURSE,PREREQUIESTS,START_DATE,END_DATE) VALUES (4 , 'JAVASCRIPT','COMPUTERSCIENCE','2019-1-25 06:54:16', '2019-2-15 13:05:09');
 INSERT INTO COURSE (ID,COURSE,PREREQUIESTS,START_DATE,END_DATE) VALUES (1 , 'HTML','','2018-6-25 06:54:16', '2018-8-15 13:05:09');
 INSERT INTO COURSE (ID,COURSE,PREREQUIESTS,START_DATE,END_DATE) VALUES (6 , 'REACT','JAVASCRIPT','2018-11-25 06:54:16', '2018-12-15 13:05:09');
 INSERT INTO COURSE (ID,COURSE,PREREQUIESTS,START_DATE,END_DATE) VALUES (3 , 'GIT','INTERNET KNOWLEDGE','2018-9-25 06:54:16', '2018-9-30 13:05:09');
 
 SELECT * FROM COURSE;
 
 SELECT * FROM COURSE_STUDENT;
 DESCRIBE COURSE_STUDENT;
 
 #INSERT VALUES INTO COMPOSITE TABLE COURSE_STUDENT
 INSERT INTO  COURSE_STUDENT (STUDENT_ID,COURSE_ID) VALUES (1,6);
 INSERT INTO  COURSE_STUDENT (STUDENT_ID,COURSE_ID) VALUES (2,4);
 INSERT INTO  COURSE_STUDENT (STUDENT_ID,COURSE_ID) VALUES (3,6);
 INSERT INTO  COURSE_STUDENT (STUDENT_ID,COURSE_ID) VALUES (4,5);
 INSERT INTO  COURSE_STUDENT (STUDENT_ID,COURSE_ID) VALUES (1,2);
 INSERT INTO  COURSE_STUDENT (STUDENT_ID,COURSE_ID) VALUES (1,5);
 INSERT INTO  COURSE_STUDENT (STUDENT_ID,COURSE_ID) VALUES (5,4);
 INSERT INTO  COURSE_STUDENT (STUDENT_ID,COURSE_ID) VALUES (3,5);
 
 SELECT * FROM COURSE_STUDENT;
 
 SELECT * FROM COURSE;
 
 SELECT * FROM STUDENT;
 
 #FIND THE COURSES FOR STUDENT ID 1
 SELECT COURSE.COURSE , COURSE.ID , STUDENT.NAME FROM STUDENT
    JOIN COURSE_STUDENT ON COURSE_STUDENT.STUDENT_ID = STUDENT.ID 
    JOIN COURSE ON COURSE_STUDENT.COURSE_ID = COURSE.ID
    WHERE STUDENT.ID = 1;
 
  # RETRIVING ALL THE STUDENTS TAKING JAVASCRIPT COURSE
 SELECT COURSE.COURSE,STUDENT.NAME,COURSE_STUDENT.COURSE_ID,COURSE_STUDENT.STUDENT_ID FROM COURSE
						JOIN COURSE_STUDENT ON COURSE_STUDENT.COURSE_ID =COURSE.ID
                        JOIN STUDENT ON STUDENT.ID = COURSE_STUDENT.STUDENT_ID
                        WHERE COURSE.COURSE LIKE '%JAVASCRIPT%'; 
                        
                        
                        