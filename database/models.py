# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class AuthGroup(models.Model):
    name = models.CharField(unique=True, max_length=150)

    class Meta:
        managed = False
        db_table = 'auth_group'


class AuthGroupPermissions(models.Model):
    id = models.BigAutoField(primary_key=True)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)
    permission = models.ForeignKey('AuthPermission', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_group_permissions'
        unique_together = (('group', 'permission'),)


class AuthPermission(models.Model):
    name = models.CharField(max_length=255)
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING)
    codename = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'auth_permission'
        unique_together = (('content_type', 'codename'),)


class AuthUser(models.Model):
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField(blank=True, null=True)
    is_superuser = models.IntegerField()
    username = models.CharField(unique=True, max_length=150)
    first_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150)
    email = models.CharField(max_length=254)
    is_staff = models.IntegerField()
    is_active = models.IntegerField()
    date_joined = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'auth_user'


class AuthUserGroups(models.Model):
    id = models.BigAutoField(primary_key=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_groups'
        unique_together = (('user', 'group'),)


class AuthUserUserPermissions(models.Model):
    id = models.BigAutoField(primary_key=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    permission = models.ForeignKey(AuthPermission, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_user_permissions'
        unique_together = (('user', 'permission'),)


class Categories(models.Model):
    category_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=64)
    institute_id_fk = models.ForeignKey('Institutes', models.DO_NOTHING, db_column='institute_id_fk')
    course_id_fk = models.ForeignKey('Courses', models.DO_NOTHING, db_column='course_id_fk')

    class Meta:
        managed = False
        db_table = 'categories'


class Concepts(models.Model):
    concept_id = models.AutoField(primary_key=True)
    answer = models.TextField()
    question_id_fk = models.ForeignKey('Questions', models.DO_NOTHING, db_column='question_id_fk', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'concepts'


class Courses(models.Model):
    course_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=128)
    description = models.CharField(max_length=2048)
    programme_year = models.IntegerField()
    creation_date = models.DateField()
    department_id_fk = models.ForeignKey('Departments', models.DO_NOTHING, db_column='department_id_fk')

    class Meta:
        managed = False
        db_table = 'courses'


class Departments(models.Model):
    department_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=128)
    institute_id_fk = models.ForeignKey('Institutes', models.DO_NOTHING, db_column='institute_id_fk')
    member_id_fk = models.ForeignKey('Members', models.DO_NOTHING, db_column='member_id_fk')

    class Meta:
        managed = False
        db_table = 'departments'


class DjangoAdminLog(models.Model):
    action_time = models.DateTimeField()
    object_id = models.TextField(blank=True, null=True)
    object_repr = models.CharField(max_length=200)
    action_flag = models.PositiveSmallIntegerField()
    change_message = models.TextField()
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING, blank=True, null=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'django_admin_log'


class DjangoContentType(models.Model):
    app_label = models.CharField(max_length=100)
    model = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'django_content_type'
        unique_together = (('app_label', 'model'),)


class DjangoMigrations(models.Model):
    id = models.BigAutoField(primary_key=True)
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_migrations'


class Facets(models.Model):
    facet_id = models.AutoField(primary_key=True)
    answer = models.TextField()
    question_id_fk = models.ForeignKey('Questions', models.DO_NOTHING, db_column='question_id_fk', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'facets'


class Institutes(models.Model):
    institute_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=64, blank=True, null=True)
    registration_code = models.CharField(unique=True, max_length=16)
    activated_date = models.DateField(blank=True, null=True)
    max_members = models.IntegerField()
    current_members = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'institutes'

class Lessons(models.Model):
    lesson_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=64)
    description = models.CharField(max_length=2048)
    programme_year = models.IntegerField()
    creation_date = models.DateField()
    course_id_fk = models.ForeignKey(Courses, models.DO_NOTHING, db_column='course_id_fk')

    class Meta:
        managed = False
        db_table = 'lessons'


class Members(models.Model):
    member_id = models.AutoField(primary_key=True)
    forename = models.CharField(max_length=64)
    surname = models.CharField(max_length=64)
    email = models.CharField(unique=True, max_length=128)
    username = models.CharField(unique=True, max_length=128)
    password = models.TextField()
    institute_id_fk = models.ForeignKey(Institutes, models.DO_NOTHING, db_column='institute_id_fk')

    class Meta:
        managed = False
        db_table = 'members'


class PastLessons(models.Model):
    past_lesson_id = models.AutoField(primary_key=True)
    result = models.FloatField()
    start_date = models.DateTimeField()
    end_date = models.DateTimeField(blank=True, null=True)
    lesson_id_fk = models.ForeignKey(Lessons, models.DO_NOTHING, db_column='lesson_id_fk')
    stat_id_fk = models.ForeignKey('Stats', models.DO_NOTHING, db_column='stat_id_fk')

    class Meta:
        managed = False
        db_table = 'past_lessons'


class PastQuestions(models.Model):
    past_question_id = models.AutoField(primary_key=True)
    result = models.FloatField()
    date = models.DateField()
    question_id_fk = models.ForeignKey('Questions', models.DO_NOTHING, db_column='question_id_fk')
    stat_id_fk = models.ForeignKey('Stats', models.DO_NOTHING, db_column='stat_id_fk')

    class Meta:
        managed = False
        db_table = 'past_questions'


class Questions(models.Model):
    question_id = models.AutoField(primary_key=True)
    question = models.CharField(max_length=2048)
    lesson_id_fk = models.ForeignKey(Lessons, models.DO_NOTHING, db_column='lesson_id_fk')

    class Meta:
        managed = False
        db_table = 'questions'


class Stats(models.Model):
    stat_id = models.AutoField(primary_key=True)
    student_id_fk = models.ForeignKey('Students', models.DO_NOTHING, db_column='student_id_fk')

    class Meta:
        managed = False
        db_table = 'stats'


class Students(models.Model):
    student_id = models.AutoField(primary_key=True)
    discipline = models.CharField(max_length=256)
    programme_year = models.IntegerField()
    member_id_fk = models.ForeignKey(Members, models.DO_NOTHING, db_column='member_id_fk')

    class Meta:
        managed = False
        db_table = 'students'


class Teachers(models.Model):
    teacher_id = models.AutoField(primary_key=True)
    member_id_fk = models.ForeignKey(Members, models.DO_NOTHING, db_column='member_id_fk')

    class Meta:
        managed = False
        db_table = 'teachers'
