import 'package:flutter/material.dart';

double vw(BuildContext context, int size) =>
    MediaQuery.of(context).size.width / 100 * size;

double vh(BuildContext context, int size) =>
    MediaQuery.of(context).size.height / 100 * size;

double rem(double size) => size * 10;
