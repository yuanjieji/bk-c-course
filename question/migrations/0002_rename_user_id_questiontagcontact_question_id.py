# Generated by Django 3.2.4 on 2022-04-27 08:43

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("question", "0001_initial"),
    ]

    operations = [
        migrations.RenameField(
            model_name="questiontagcontact",
            old_name="user_id",
            new_name="question_id",
        ),
    ]
