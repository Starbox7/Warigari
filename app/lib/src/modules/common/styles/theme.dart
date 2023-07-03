import 'package:flutter/material.dart';

final ThemeData theme = ThemeData();

ThemeData themeData = theme.copyWith(
  colorScheme: theme.colorScheme.copyWith(
    primary: const Color.fromRGBO(0x44, 0x72, 0xC4, 1),
    secondary: Colors.white,
    shadow: const Color.fromRGBO(0xDF, 0xDF, 0xDF, 0.3),
  ),
);
