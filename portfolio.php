<?php

declare(strict_types = 1);
require 'includes/functions.php';

includeTemplate('header');
includeTemplate('cv', false);

includeTemplate('jobs', false, true);
includeTemplate('footer');