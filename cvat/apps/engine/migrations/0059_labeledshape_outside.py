# Generated by Django 3.2.15 on 2022-08-10 08:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("engine", "0058_auto_20220809_1236"),
    ]

    operations = [
        migrations.AddField(
            model_name="labeledshape",
            name="outside",
            field=models.BooleanField(default=False),
        ),
    ]
