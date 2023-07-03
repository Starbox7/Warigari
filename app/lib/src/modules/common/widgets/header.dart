import 'package:flutter/material.dart';

class Header extends AppBar {
  Header({super.key, required BuildContext context})
      : super(
          backgroundColor: Theme.of(context).colorScheme.secondary,
          foregroundColor: Theme.of(context).colorScheme.primary,
          centerTitle: true,
          elevation: 0,
        );
}
