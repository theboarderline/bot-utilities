# Generated by Django 3.1.13 on 2021-10-10 21:08

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('leads', '0004_remove_testimony_house'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='testimony',
            options={'verbose_name_plural': 'Testimonies'},
        ),
    ]
